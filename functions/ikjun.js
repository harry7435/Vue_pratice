exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'ikjun',
            age: 28,
            email: 'harry@abc.com',
        })
    }
}