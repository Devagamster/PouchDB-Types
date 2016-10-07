// Type definitions for pouchdb v5.4.4
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='adapter-fruitdown' />
/// <reference types='adapter-http' />
/// <reference types='adapter-idb' />
/// <reference types='adapter-leveldb' />
/// <reference types='adapter-localstorage' />
/// <reference types='adapter-memory' />
/// <reference types='adapter-node-websql' />
/// <reference types='adapter-websql' />
/// <reference types='browser' />
/// <reference types='core' />
/// <reference types='http' />
/// <reference types='mapreduce' />
/// <reference types='node' />
/// <reference types='replication' />

declare module 'pouchdb' {
    const plugin: PouchDB.Static;
    export = plugin;
}
