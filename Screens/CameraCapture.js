import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function CameraCapture(props) {

    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();

    const [permission , setPermission] = useState();
    // useEffect(() => {
    //     (async () => {
    //         const cameraPermission = await Camera.requestCameraPermissionsAsync();
    //         const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
    //         setHasCameraPermission(cameraPermission.status === props.cameraPermission);
    //         setHasMediaLibraryPermission(mediaLibraryPermission.status === props.mediaPermission);
    //     })();
    // }, []);


    const handlePermission = () => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
            setPermission(true);
        })();
    }

    // if(hasCameraPermission === undefined) {
    //     return <Text>Requesting Permissions...</Text>
    // } else if(!hasCameraPermission) {
    //     return <Text>Permission for camera not granted. Please change this in settings.</Text>
    // }


    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false,
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    }

    if(photo) {
        let sharePic = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        return(
            <View style={[styles.container,{height:300,width:"100%"}]}>
                <Image style={[styles.preview]} source={{uri: "data:image/jpg;base64," + photo.base64}} />
                <View style={[{ display:"flex", justifyContent:"center", flexDirection:"row",width:"100%"}]}>

                <Button title="Share Photo" onPress={sharePic} />
                {hasMediaLibraryPermission? <Button title="Save Photo" onPress={savePhoto} /> : undefined }
                <Button title="Discard" onPress={() => setPhoto(undefined)} />
                </View>
            </View>
        );
    }

    if(permission) {

            return (
                <View style={[{width:"100%",height:"100%",position:"relative", top:0, left:0,zIndex:99}]}>
                    <Camera style={[styles.container, {height:600,}]} ref={cameraRef}>
                        <View style={[styles.buttonContainer, {position:"absolute",left:0,display:"flex", flexDirection:"row", justifyContent:"center",bottom:0, right:0}]}>
                            <Button title="Take Pic" onPress={takePic} style={[{width:700,alignSelf:"stretch",}]}><Text  style={[{width:700,alignSelf:"stretch",}]}>Take Pic</Text></Button>
                            <Button title="Discard" onPress={() =>  setPermission(false)} />
                        </View>
                    </Camera>
                </View>
            )
    }
    return( 
        <View style={[styles.container]} >
            <Button onPress={() => handlePermission()} title="Access Camera"/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",

    },
    buttonContainer: {
        backgroundColor: "#fff",
        alignSelf: "flex-end",
    },
    preview: {
        alignSelf: "stretch",
        flex:1,
    }
})