unzipDownloadFile(res.path(), (jsonFilePath) => {
    storeJSONtoAsyncStorage(jsonFilePath);
});
function unzipDownloadFile(target, cb) {
    const targetPath = target;
    const sourcePath = `${target}.json`;
    const charset = 'UTF-8';

    unzip(sourcePath, targetPath, charset)
        .then((path) => {
            console.log(`unzip completed at ${path}`)
            return cb(path);
        })
        .catch((error) => {
            console.error(error, 'asd')
        });
}

function storeJSONtoAsyncStorage(path) {
    RNFetchBlob.fs.readFile(path, 'utf-8')
        .then((data) => {
            AsyncStorage.setItem('myJSON', data);
        });
}
