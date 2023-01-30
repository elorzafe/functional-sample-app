import { AppSync } from './AppSync';
// import { TranslateText } from "./Translate";

export function Main({ user }) {
    return <div>
        <div>
            <p>{user}</p>
            <AppSync/>
            {/* <TranslateText/> */}
        </div>
    </div>
}