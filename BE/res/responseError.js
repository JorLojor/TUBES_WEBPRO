function sendErrorResponse(res, error, message = 'Terjadi kesalahan', status = 500) {
    res.status(status).json({
        success: false,
        message: message,
        error: error,
    });
}

module.exports = sendErrorResponse;
  