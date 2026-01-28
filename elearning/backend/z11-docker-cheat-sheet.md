

## docker


**Stop and Remove all Docker Containers**

```sh
docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q) 
```

모드 이미지 지우기 
This will remove:
- all stopped containers
- all networks not used by at least one container
- all images without at least one container associated to them
- all build cache

```sh 
docker system prune -a
```
