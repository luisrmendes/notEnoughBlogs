---
title: The Illusion of Thinking 
date: 2025-07-04
author: Luis Mendes
layout: post.njk
---

## Misc Drivers in Linux

- What is a misc driver?  
A miscellaneous driver for miscellaneous devices. Used when you cannot classify your peripheral. Your lose the capability of choosing your major number yourself, since the default is 10 for all misc drivers. The minor number is what is more convenient to the user

- What makes a driver a *misc* driver?
Registering the program as a misc:  
```c
#include <linux/miscdevice.h>

int misc_register(struct miscdevice *misc)

void misc_deregister(struct miscdevice *misc)
```

- Why is it called *character* device?

".llseek = no_llseek, in your file_operations structure disables seeking (changing the file offset) on your device file.
llseek is the handler for the lseek system call, which allows userspace to move the read/write pointer within a file.
no_llseek is a kernel helper function that returns -ESPIPE, meaning "illegal seek", so any attempt to seek (e.g., lseek(), fseek()) on your device will fail.
This is common for device files that do not support random access, such as simple character devices."

- What are kernel sources directories?

- Kernel module return values do not pass to user space