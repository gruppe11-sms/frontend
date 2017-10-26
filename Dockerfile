FROM alexsuch/angular-cli:1.4.8 as build
RUN apk add --no-cache ca-certificates

# Install dependencies
ADD package.json /app/package.json
WORKDIR app/
RUN yarn install

# Add and build the actual project
ADD . ./
RUN ls src/
RUN ng build


FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
