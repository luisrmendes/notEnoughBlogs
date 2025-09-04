---
title: Miscellaneous Character Drivers
date: 2025-08-26
author: Luis Mendes
layout: post.njk
---

Here is a great article from the Linux Journal that provides a great explanation.  
<https://www.linuxjournal.com/article/2920>  

A TLDR with minimal contributions from my side:

## What is a misc char driver?  

A miscellaneous driver for miscellaneous devices.  
This is used when you want to write a driver for a peripheral you cannot classify, and since the kernel has a static table of device drivers, frivolous allocation of major numbers is rather wasteful of RAM. Therefore, all misc char devices have a fixed major number 10 which is the default for all misc char drivers. The programmer is still allowed to choose the minor number via the miscdevice struct that is used when registering the driver.  

```c
struct miscdevice {
    int minor;
    const char *name;
    struct file_operations *fops;
    struct miscdevice *next, *prev;
};
```

## What is a major and minor number in the linux kernel?  

"In UNIX, Linux and similar operating systems, every device is identified by two numbers: a “major” number and a “minor” number. These numbers can be seen by invoking ls -l /dev. Every device driver registers its major number with the kernel and is completely responsible for managing its minor numbers. Use of any device with that major number will fall on the same device driver, regardless of the minor number. As a result, every driver needs to register a major number, even if it only deals with a single device, like a pointing tool."

## What makes a driver a *misc* driver?  

Registering the module as a miscellaneous driver using the misc_register function from linux/miscdevice.h lib.  

```c
#include <linux/miscdevice.h>

int misc_register(struct miscdevice *misc)
void misc_deregister(struct miscdevice *misc)
```

Here is a practical example:

```c
struct miscdevice swrd_misc_device = {
    .minor = MISC_DYNAMIC_MINOR,
    .name = "swrd_misc_device",
    .fops = &fops,
};

static int __init mod_init(void)
{
    int error;

    error = misc_register(&swrd_misc_device);
    if (error)
    {
        pr_err("misc_register failed!!!\n");
        return error;
    }

    pr_info("misc_register init done!!!\n");
    return 0;
}

static void __exit mod_exit(void)
{
    misc_deregister(&swrd_misc_device);
    pr_info("misc_register exit done!!!\n");
}

module_init(mod_init);
module_exit(mod_exit);
```

## Why is it called *character* device?

It's a designation of drivers that deal with individual characters - one byte at a time.  
Character is a term widely used to express bytes. This originated from the early standards of character enconding, where a single character is represented in a single byte. An example of an early character standard is ASCII (1972), where characters are represented in 7 bits and addressed in a single byte. More modern standards were created like UTF-8 and UTF-16 that use character encoding with 1 to 4 bytes. Refering bytes as characters might not be technically correct in today's standards, but it's still widely used.
