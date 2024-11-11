# Portal 2 CM Boards v2 with NextJS

[Portal 2 CM Boards](https://github.com/p2sr/Portal2Boards) but with NextJS, shadcn, prisma, and tailwind, all discussions are at [discord.gg/p2sr](https://discord.gg/p2sr) on the cm-boards channel with the pinned thread

## Prequisites

Before you begin, ensure you meet these requirements:

-   **Node.js (>=16.x)**
-   **npm (>=6.x)**
-   **MySQL (>=5.7)**

## Initializing project

To start, clone the repository

```sh
git clone https://github.com/FifthWit/p2-boards-v2-next.git
cd p2-boards-v2-next
```

## Environment Setup

Create a `.env` file in the root directory and add the following environment variables:

```env
MYSQL_DATABASE_URL="mysql://username:password@localhost:3306/leaderboard_db"
```

note you can change `leaderboard_db` to whatever your db name is

### Database Setup

1. Install MySQL:

    - [Download MySQL](https://dev.mysql.com/downloads/mysql/)
    - Follow the installation instructions for your operating system.

2. Create a new database:

    ```sh
    mysql -u root -p
    CREATE DATABASE leaderboard_db;
    ```

3. Import the initial data dump:
   Download the data dump from boards v1.
   Unzip the file with a tool like [7-Zip](https://www.7-zip.org/).
   Import the data dump into your MySQL database:
    ```sql
    mysql -u root -p
    USE leaderboard_db;
    SOURCE (insert file path here)
    ```
    Now you're database should be working as normal

### Starting development

Then start the development server

```sh
npm install
npm run dev
```

### Extras

if you are testing Autosubmit functionality I recommend opening Prisma studio with `npx prisma studio` then finding your profile and adding your autosubmit_key.txt content to the auth_hash column so you can work with the autosubmission.

if you need to work with autosubmit you can use the build I am currently using to test functionality [here](https://github.com/FifthWit/p2-boards-v2-next) currently it is only compatible with Windows

the docs will be poor for a bit but if anyone wants to make some, please do <3
