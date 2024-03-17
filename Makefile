.PHONY :  docker-build-gate-server

docker build -t ms-gate-server .

docker run -d --name ms-gate-server -p 3000:3000  --network my-network -e MONGO_LOCAL_URL=mongodb://mongodb:27017/ms_gate_db -p 3000:3000 --restart unless-stopped --link=mongodb ms-gate-server


docker run -d --name ms-gate-server -p 1337:1337 ms-gate-server
