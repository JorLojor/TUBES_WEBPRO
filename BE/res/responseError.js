function sendErrorResponse(res, error,) {
    res.status(500).json({
        success: false,
        message: error.message,
        data: null,
    });
}

module.exports = sendErrorResponse;
