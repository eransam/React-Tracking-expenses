import "./card-wrapper.css";

// כאן אנו יוצרים ווראפר אשר יוכל לעטוף קוד אשר יוכנס לתוכו
function CardWrapper(props) {

    // כאן אנו קובעים שהקוד אשר יוכנס לתוכו יהיה תחת קלאס הווראפר וגם הקלאס האישי שלו ולא יהיה התנגשות
    const classes = 'card ' + props.className;

    // זו בעצם הפקודה אשר מאפשרת לנו לעטוף שורות קוד בעזרת הווראפר שלנו {props.children}
    return <div className={classes}>{props.children}</div>
}

export default CardWrapper