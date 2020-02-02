# Project 1

## Tasks

### Setup Node Environment

I have done this

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

Created the endpoint app.get("/filteredimage/", (req: Request, res: Response)
in 
`./src/server.ts`  file.

### Deploying in EB

Have created by `eb init` a new application and `eb create` a new environment to deploy  image-filter service! 

### To ACCESS and TEST

http://54.165.247.210/filteredimage?image_url=https://www.telenor.com.mm/sites/default/files/telenor-business.jpg
