FROM golang:1.14.7
COPY . /app
WORKDIR /app

RUN go mod download \
&& go mod verify \
&& go build -o build/app main.go

CMD ["/app/build/app"]