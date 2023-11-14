import React, {useState} from 'react'
import photo from '../../assets/imges/Professional-Man-Avatar.png'
import photo2 from '../../assets/imges/user-images.png'
import photo3 from '../../assets/imges/redLikeIcon.png'
import style from './News.module.css'
type NewsPropsType = {}
export const News = (props: NewsPropsType) => {
    let arr = [photo, photo2, photo3]
    let resultArr = arr.map(el => <img className={style.ImgNews} src={el}/>)
    const [n, setN] = useState(0)
    const foo = () => {
        n > 1 ? setN(0) : setN(n + 1)
    }
    const foo2 = () => {
        n === 0 ? setN(resultArr.length-1) : setN(n -1)
    }
    return (
        <div>
            <div><img className={style.groupLogo} src={photo}/> Футбол АПЛ</div>
            <div>
                <button onClick={foo2}>left</button><span >{resultArr[n]}</span><button onClick={foo}>Next</button>
            </div>
        </div>
    )
}