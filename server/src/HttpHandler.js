function getRoot(request,response){

    response.status=200;
    response.json({
        name:'khushpreet singh',
        age:'29'
    })
}


module.exports={
    getRoot
}