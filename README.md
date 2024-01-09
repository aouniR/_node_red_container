# _node_red_container
Creation steps of Node-red encrypted container with Apptainer on AMD64 and ARM64 architectures.


1-To install the Apptainer, visit this link https://github.com/apptainer/apptainer/blob/main/INSTALL.md 
2-Create your node-red flow. 
3-Create the Apptainer definition file ".def".
4-Compile and create the encrypted container based on previous definition using this command: apptainer build -e --passphrase cont-name.sif def-name.def
5-Sign the sif file with this command: apptainer sign con-name.sif
6-Run the container with apptainer run -p 1880:1880 --passphrase cont-name.sif

##Emulating Rasp env using Qemu:
1-Installing QEMU https://www.qemu.org/download/#linux
3-Download to the QEMU-img/ from 
3-sudo qemu-system-aarch64 -machine virt -cpu cortex-a72 -smp 6 -m 4G \         
    -kernel Image -append "root=/dev/vda2 rootfstype=ext4 rw panic=0 console=ttyAMA0" \
    -drive format=raw,file=2023-12-05-raspios-bullseye-arm64-lite.img,if=none,id=hd0,cache=writeback \
    -device virtio-blk,drive=hd0,bootindex=0 \
    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \
    -device virtio-net-pci,netdev=mynet \
    -monitor telnet:127.0.0.1:5555,server,nowait

