---
title: How to change password of your local mysql server macOs
author: Bishal Neupane
pubDatetime: 2023-06-06T11:57:07.508Z # new Date().toISOString()
postSlug: how-to-change-password-of-your-local-mysql-server-macos
featured: false
draft: false
tags:
  - DataBase
  - MySQL
description: "In this blog post, I outline a step-by-step guide to help you reset the password for your local MySQL server. By following these instructions, you can regain access to your server and avoid the frustration of forgetting your password in the future."
ogImage: ""
---

**First step:** Stop the mysql server if it is running

```bash
brew stop services mysql # macos
```

**Second step:** Start mysql server in safe mode

<small> In MySQL, safe mode is a startup option that allows you to start the server with certain restrictions and security measures in place. Like Read-only system tables: In safe mode, system tables are marked as read-only. Limited file privilege etc </small>

```bash
sudo mysqld_safe --skip-grant-tables
```

**Third step:** Connect to mysql using this command

```bash
mysql -u root
```

**Fourth step:** Once you’re logged in you can change the password for the root user or any other user

```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

Replace `new_password` with your desired password

**Fifth Step:** Flush privileges and exit: After changing the password, run the following command to flush the privileges and exit the MySQL server;

```bash
FLUSH PRIVILEGES;
EXIT;
```

`FLUSH PRIVILEGES` statement does not change or modify the privileges themselves. Its primary purpose is to ensure that any changes made to user accounts and privileges take effect immediately. Without flushing privileges, the changes may not be recognized by the server until the next server restart or until the privilege tables are reloaded for some other reason.

**Sixth Step:** Restart the MySQL server: Stop the MySQL server running in safe mode and start it again normally. This will allow you to log in with the newly set password.

Now you should be able to login to you local mysql server using the updated password.
