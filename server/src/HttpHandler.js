function getRoot(request,response){

    response.status=200;
    response.json({
        name:'khushpreet singh updated',
        age:'29 22'
    })
}


module.exports={
    getRoot
}