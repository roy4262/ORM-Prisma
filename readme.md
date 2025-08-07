# shift + alt + f (to format code)
#  npm init -y
# give file name as orm-prisma and move directory
# npm i typescript
# npx tsx --init
# change rootDir to src and outDir to dist(urchoice)
# add dev script "dev" : "tsx -b && node ./dist/index.js"
# npm run dev
-----------------------------------
# npx prisma init

# add databe schema.prisma and url in .env file

# create model in schema.prisma file 

# migrate database using npx prisma migrate dev
# give name for new migration and it will store in migration folder
# npx prisma generate (generate client)
# after generating client we have create object for client and used for crud operation in databse
#client.todo.create()      // Create one record
client.todo.createMany()  // Create multiple records
client.todo.findMany()    // Find all records
client.todo.findUnique()  // Find one specific record
client.todo.findFirst()   // Find first matching record
client.todo.update()      // Update a record
client.todo.updateMany()  // Update multiple records
client.todo.delete()      // Delete a record
client.todo.deleteMany()  // Delete multiple records
client.todo.upsert()      // Update or create
