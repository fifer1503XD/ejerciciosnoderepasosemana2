function landMass(pais,area) {
    let wordl =148940000
    percent= parseFloat(((area*100)/wordl).toFixed(2))

    message=pais+' representa el '+percent+' % de la masa de la tierra'
    result={percent,message}
    return result;
}

module.exports = landMass;