module.exports = {
  response: (res, data, code, msg, meta) => {
    let resultPrint = {};
    if (meta) {
      resultPrint.meta = meta
    }
    resultPrint.msg = msg ?? 'Success';
    resultPrint.status_code = code;
    resultPrint.data = data ?? null;
    return res.status(resultPrint.status_code).json(resultPrint);
  }

}