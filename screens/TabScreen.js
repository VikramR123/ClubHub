import React, { Component, useState } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1'
import Tab2 from './tabs/tab2'
import Tab3 from './tabs/tab3'



export default function TabScreen() {
    const [activeIcon, setActiveIcon] = useState(1);
    const [activeTab, setActiveTab] = useState(<Tab1 />);


    return (
    <Container>
        <Header />
        
        {activeTab}

        <Footer>
        <FooterTab>
            <Button active={activeIcon === 1} onPress={() => {setActiveIcon(1); setActiveTab(<Tab1 />)}} badge vertical>
            <Badge><Text>2</Text></Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
            </Button>
            <Button active={activeIcon === 2} onPress={() => {setActiveIcon(2); setActiveTab(<Tab2 />)}} vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
            </Button>
            <Button active={activeIcon === 3} onPress={() => {setActiveIcon(3); setActiveTab(<Tab3 />)}} badge vertical>
            <Badge ><Text>51</Text></Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
            </Button>
            <Button active={activeIcon === 4} onPress={() => {setActiveIcon(4); setActiveTab(<Tab1 />)}} vertical>
            <Icon name="person" />
            <Text>Contact</Text>
            </Button>
        </FooterTab>
        </Footer>
    </Container>
    );
}