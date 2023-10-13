function sendSuccessResponse(res, data, message = 'Request berhasil', status = 200) {
    res.status(status).json({
        success: true,
        message: message,
        data: data,
    });
}

module.exports = sendSuccessResponse;
