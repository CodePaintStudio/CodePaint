import styles from "../styles/UserInfoItem.module.css"

function PersonalInfoItem(props) {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.left}>
                <div>{props.info.itemName}：</div>
                <div style={{color: "rgb(107, 172, 163)"}}>{props.info.itemValue}</div>
            </div>
        </div>
    );
}

export default PersonalInfoItem;
