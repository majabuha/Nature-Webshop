FROM node:latest

# mapp som kommer att skapas i den image vi bygger nu
WORKDIR /app

# kopiera över filer in i image, /app/package.json osv.
COPY package.json package-lock.json ./

RUN npm install

# kopiera över alla filer från lokala mappen till image, /app/*
COPY . ./

# kör: npm run start
# OBS! Detta är lokala utvecklingsservern!
# i produktion bör man bygga projektet med "npm run build" och starta en riktig webbserver
CMD ["npm", "run", "start"]