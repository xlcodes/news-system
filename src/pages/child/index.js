import style from "./index.module.css"

const Child = () => {
    return (
        <div>
            Child
            <ul className={style.wrap}>
                <li>child-111111111</li>
                <li>child-111111111</li>
            </ul>
        </div>
    )
}

export default Child;