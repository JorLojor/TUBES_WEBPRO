function sendSuccessResponse(res, data, status = 200,message) {
    res.json({
        success: true,
        status: status,
        message: message,
        data: data,
    })
}

module.exports = sendSuccessResponse;
