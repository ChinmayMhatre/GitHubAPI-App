import React from 'react'
import { View,
         Text,
         Image,
         StyleSheet
     } from 'react-native'

import { Card,
         CardItem,
         H1
} from 'native-base'

const User = ({details}) => {
    return (
        <Card style={styles.card}>
            <CardItem style={styles.cardItem} >
                <Image
                    source={{
                        uri:details.avatar_url
                    }}
                    style={
                        styles.image
                    }
                />
            </CardItem>
            <CardItem style={styles.cardItem}>
                <H1 style={styles.text} >{details.name}</H1>
            </CardItem>
            <CardItem  style={styles.cardItem}>
                <Text style={styles.text} >Followers : {details.followers}</Text>
            </CardItem>
            <CardItem  style={styles.cardItem}>
                <Text style={styles.text} >Following : {details.following}</Text>
            </CardItem>
            <CardItem footer style={styles.cardItem}>
                <Text style={styles.text} >Public Repos : {details.public_repos}</Text>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        width:"80%",
        backgroundColor:"#0C1017",
        borderColor:"#292E34",
        borderWidth:4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom:80,
        paddingBottom:10
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#292E34',
        marginTop: -50,
      },
    cardItem:{
        backgroundColor:"#0C1017",
        borderColor:"#292E34",
    },
    text:{
        color:"#ccc"
    }
})
export default User
