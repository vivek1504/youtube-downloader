import { RecoilRoot } from 'recoil';
import './App.css';
import { InputField } from './component/InputField';
import { VideoCard } from './component/VideoCard';
import { Text } from './component/Text';
import { BottomCard } from './component/BottomCard';
import { FooterComp } from './component/FooterComp';
import { Button } from './component/Button';
import { useState } from 'react';

function App() {
    const [pasteLink, setpasteLink] = useState(false);
    return <RecoilRoot>
     <div className='mt-10'>
        <Text></Text>
        {pasteLink ? <>
            <InputField setPasteLink={setpasteLink}></InputField>
            <VideoCard></VideoCard>
            <Button></Button> 
        </> : <div className='sm:mb-20'>
                <InputField setPasteLink={setpasteLink}></InputField>
            </div>}
        
        <BottomCard></BottomCard>
        <FooterComp></FooterComp>
    </div>
    </RecoilRoot>
}

export default App;
