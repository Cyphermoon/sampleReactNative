import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeading: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247, 247, 247, 1.0)'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

const SectionListBasics = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: "D", data: ["Devin", "Dan", "Dominic"] },
                    {
                        title: 'J',
                        data: [
                            'Jackson',
                            'James',
                            'Jillian',
                            'Jimmy',
                            'Joel',
                            'John',
                            'Julie',
                        ],
                    },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeading}>{section.title}</Text>}
                keyExtractor={item => `basicListEntry-${item}`} />
        </View>
    )
}

export default SectionListBasics