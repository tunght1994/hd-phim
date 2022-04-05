import moment from "moment"

const convertDateTime = (item , format) => {
    return moment(item).format(format)
}

export default convertDateTime