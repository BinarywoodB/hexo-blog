---
title: Docker Toolkit
date: 2021-01-02 20:20:50
tags: 
- Docker
categories:
- Tech
- Toolkit
---

# Docker Toolkit

## Clean all container

```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

## Clean all

```bash
docker container stop $(docker container ls -a -q) && docker system prune -a -f --volumes
```

## Remove all images except one

```bash
docker image prune -a --force --filter "label!=image_name"
```

## Check disk usage
    
```bash
docker system df
docker system df -v
```

## Enable docker CLI in WSL(with Docker for Windows installed)

1. Tick the checkbox in docker setting:

    `Expose docker daemon on tcp://localhost:2357 without TSL`

1. Install docker cli in WSL.

    ```apt-get install docker.io```

1. Expose tcp port in WSL.

    ```bash
    docker -H tcp://0.0.0.0:2375 images
    echo "export DOCKER_HOST=tcp://localhost:2375" >> ~/.bashrc && source ~/.bashrc

    # If you are using zsh
    echo "export DOCKER_HOST=tcp://localhost:2375" >> ~/.zshrc && source ~/.zshrc
    ```

1. Verify docker is enabled in WSL

    ```bash
    docker --version
    ```
    Now you are using docker in WSL.

## Dockerfile Optimization

Use [this website](https://www.fromlatest.io/#/) to double check your Dockerfile.

## Size of Docker Image

Docker image is compressed for faster download speed, and will be decompressed after being downloaded to your local machine. 

The **compressed size** counts for the download time needed in certain development internet transmission environment, and the **decompressed image size** matters since it consumes local disk.

### Actual Size of Docker Images

To get **decompressed size** of a docker image (i.e. the actual size), run the following command.

```bash
docker image ls

# or
docker system df -v
```

### Compressed Size of Docker Images

To get **compressed size** of a docker image is more complicated. 

1. Get compressed image size information via [Docker Hub Registry HTTP API v2](https://docs.docker.com/registry/spec/api/#introduction).

    1. If the image is host on Docker Hub

        ```bash
        curl -s -H "Authorization: JWT ${TOKEN}" "https://hub.docker.com/v2/repositories/library/<image-name>/tags/?page_size=100" | jq -r '.results[] | select(.name == "<tag-name>") | .images[0].size' | numfmt --to=iec-i
        # "numfmt --to=iec-i" is for human readibility
        ```
        
        Example to get the compressed image size of `alpine:latest`
        
        ```bash
        curl -s -H "Authorization: JWT ${TOKEN}" "https://hub.docker.com/v2/repositories/library/alpine/tags/?page_size=100" | jq -r '.results[] | select(.name == "latest") | .images[0].size' | numfmt --to=iec-i
        ```

    1. If the image is host on Microsoft Container Registry

        Parse method depends on the registry's implementation and compability of docker HTTP Registry API.

        ```bash
        docker manifest inspect -v devicedevex.azurecr.io/alpine-azure-sdk | grep size | awk -F ':' '{sum+=$NF} END {print sum}' | numfmt --to=iec-i
        ```

1. Push your image to your domain in docker hub, you can see the compressed size listed on docker hub.

1. Use `docker save` to save image to a .tar file and then compress it a .tar.gz file. 

    ```bash
    docker save my-image:latest > my-image.tar

    # Compress the .tar file
    gzip my-image.tar

    # Check the size of the compressed image
    ls -lh my-image.tar.gz
    ```

1. Using internet monitor to capture the data size transfered during `docker pull` might be inconcise due to HTTP's network congestion control, etc. This method is not recommended.





