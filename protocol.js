module.exports = require("protobufjs").newBuilder({})['import']({
    "package": null,
    "messages": [
        {
            "name": "gogoproto",
            "fields": [],
            "options": {
                "java_package": "com.google.protobuf",
                "java_outer_classname": "GoGoProtos"
            }
        },
        {
            "name": "protocol",
            "fields": [],
            "messages": [
                {
                    "name": "Point",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "total",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "count",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "Series",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "fields",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "Point",
                            "name": "points",
                            "id": 2,
                            "options": {
                                "(gogoproto.nullable)": false
                            }
                        }
                    ]
                },
                {
                    "name": "Chunk",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "from",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "to",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "Series",
                            "name": "series",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "Request",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "ReqTrack",
                            "name": "track",
                            "id": 2,
                            "oneof": "req"
                        },
                        {
                            "rule": "optional",
                            "type": "ReqFetch",
                            "name": "fetch",
                            "id": 3,
                            "oneof": "req"
                        }
                    ],
                    "oneofs": {
                        "req": [
                            2,
                            3
                        ]
                    }
                },
                {
                    "name": "ReqTrack",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "database",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "time",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "total",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "count",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "fields",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "ReqFetch",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "database",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "from",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "to",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "fields",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "Response",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "ResTrack",
                            "name": "track",
                            "id": 2,
                            "oneof": "res"
                        },
                        {
                            "rule": "optional",
                            "type": "ResFetch",
                            "name": "fetch",
                            "id": 3,
                            "oneof": "res"
                        }
                    ],
                    "oneofs": {
                        "res": [
                            2,
                            3
                        ]
                    }
                },
                {
                    "name": "ResTrack",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "error",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "ResFetch",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "error",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "Chunk",
                            "name": "chunks",
                            "id": 2
                        }
                    ]
                }
            ]
        }
    ]
}).build();