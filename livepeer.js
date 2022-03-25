const path = require('path');
require('dotenv').config();

const url = require('url');
const fs = require('fs');
var AWS = require('aws-sdk');
var request = require('request');

var child_process = require('child_process');
var https = require('https');
var axios = require('axios');

let currentWorkerCount = 0;
let maxWorkerCount = 4;

(async () => {
	// 	curl --location --request POST 'https://livepeer.com/api/asset/import' \
	// --header 'Authorization: Bearer $API_TOKEN' \
	// --header 'Content-Type: application/json' \
	// --data-raw '{
	//     "url":"$EXTERNAL_URL",
	//     "name":"Example name"
	// }'
	axios
		.post(
			'https://livepeer.com/api/asset/import',
			{
				url: 'https://d3787vup7x4c8y.cloudfront.net/f_b1_720.mp4',
				name: 'Alvin5 example',
			},
			{
				headers: {
					Authorization: 'Bearer 8b2a2768-4ae5-40e5-bb2a-793ec562b475',
					'content-type': ' application/json',
				},
			}
		)
		.then(function (response) {
			console.log('axios ok');
			console.log(response);
		})
		.catch(function (error) {
			console.log('axios error');
			console.log(error);
		});

	//RESPONSE
	// 		 status: 201,
	//   statusText: 'Created',
	//   headers: {
	//     date: 'Fri, 25 Mar 2022 08:26:53 GMT',
	//     'content-type': 'application/json',
	//     'content-length': '538',
	//     connection: 'close',
	//     'cf-ray': '6f16439b0b5060ad-SEA',
	//     'access-control-allow-origin': '*',
	//     etag: 'W/"21a-PvX2/Ufj9Z06gpxJHT15y3Yntgk"',
	//     vary: 'Origin',
	//     'cf-cache-status': 'DYNAMIC',
	//     'access-control-allow-credentials': 'true',
	//     'access-control-expose-headers': '*',
	//     'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
	//     'x-powered-by': 'Express',
	//     'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=G%2BXvdFuqJhishGTA9NXpRFkm9RrTo84AY4zD8zHI%2F0gYPNimVYhFhh7jTW3qJp27th%2FL9nkuSzAr8epbwDSkgtpbfBML3%2FKSuXuyhtSwtdhgl4oUhKmPxdqrd4nNVQ%3D%3D"}],"group":"cf-nel","max_age":604800}',
	//     nel: '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
	//     server: 'cloudflare',
	//     'alt-svc': 'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
	//   },
	//   config: {
	//     url: 'https://livepeer.com/api/asset/import',
	//     method: 'post',
	//     data: '{"url":"https://d3787vup7x4c8y.cloudfront.net/f_b1_720.mp4","name":"Alvin5 example"}',
	//     headers: {
	//       Accept: 'application/json, text/plain, */*',
	//       'Content-Type': ' application/json',
	//       Authorization: 'Bearer 8b2a2768-4ae5-40e5-bb2a-793ec562b475',
	//       'User-Agent': 'axios/0.19.2',
	//       'Content-Length': 84
	//     },
	//     transformRequest: [ [Function: transformRequest] ],
	//     transformResponse: [ [Function: transformResponse] ],
	//     timeout: 0,
	//     adapter: [Function: httpAdapter],
	//     xsrfCookieName: 'XSRF-TOKEN',
	//     xsrfHeaderName: 'X-XSRF-TOKEN',
	//     maxContentLength: -1,
	//     validateStatus: [Function: validateStatus]
	//   },
	//   request: <ref *1> ClientRequest {
	//     _events: [Object: null prototype] {
	//       socket: [Function (anonymous)],
	//       abort: [Function (anonymous)],
	//       aborted: [Function (anonymous)],
	//       error: [Function (anonymous)],
	//       timeout: [Function (anonymous)],
	//       prefinish: [Function: requestOnPrefinish]
	//     },
	//     _eventsCount: 6,
	//     _maxListeners: undefined,
	//     outputData: [],
	//     outputSize: 0,
	//     writable: true,
	//     destroyed: false,
	//     _last: true,
	//     chunkedEncoding: false,
	//     shouldKeepAlive: false,
	//     _defaultKeepAlive: true,
	//     useChunkedEncodingByDefault: true,
	//     sendDate: false,
	//     _removedConnection: false,
	//     _removedContLen: false,
	//     _removedTE: false,
	//     _contentLength: null,
	//     _hasBody: true,
	//     _trailer: '',
	//     finished: true,
	//     _headerSent: true,
	//     socket: TLSSocket {
	//       _tlsOptions: [Object],
	//       _secureEstablished: true,
	//       _securePending: false,
	//       _newSessionPending: false,
	//       _controlReleased: true,
	//       secureConnecting: false,
	//       _SNICallback: null,
	//       servername: 'livepeer.com',
	//       alpnProtocol: false,
	//       authorized: true,
	//       authorizationError: null,
	//       encrypted: true,
	//       _events: [Object: null prototype],
	//       _eventsCount: 10,
	//       connecting: false,
	//       _hadError: false,
	//       _parent: null,
	//       _host: 'livepeer.com',
	//       _readableState: [ReadableState],
	//       _maxListeners: undefined,
	//       _writableState: [WritableState],
	//       allowHalfOpen: false,
	//       _sockname: null,
	//       _pendingData: null,
	//       _pendingEncoding: '',
	//       server: undefined,
	//       _server: null,
	//       ssl: [TLSWrap],
	//       _requestCert: true,
	//       _rejectUnauthorized: true,
	//       parser: null,
	//       _httpMessage: [Circular *1],
	//       [Symbol(res)]: [TLSWrap],
	//       [Symbol(verified)]: true,
	//       [Symbol(pendingSession)]: null,
	//       [Symbol(async_id_symbol)]: 7,
	//       [Symbol(kHandle)]: [TLSWrap],
	//       [Symbol(kSetNoDelay)]: false,
	//       [Symbol(lastWriteQueueSize)]: 0,
	//       [Symbol(timeout)]: null,
	//       [Symbol(kBuffer)]: null,
	//       [Symbol(kBufferCb)]: null,
	//       [Symbol(kBufferGen)]: null,
	//       [Symbol(kCapture)]: false,
	//       [Symbol(kBytesRead)]: 0,
	//       [Symbol(kBytesWritten)]: 0,
	//       [Symbol(connect-options)]: [Object],
	//       [Symbol(RequestTimeout)]: undefined
	//     },
	//     _header: 'POST /api/asset/import HTTP/1.1\r\n' +
	//       'Accept: application/json, text/plain, */*\r\n' +
	//       'Content-Type:  application/json\r\n' +
	//       'Authorization: Bearer 8b2a2768-4ae5-40e5-bb2a-793ec562b475\r\n' +
	//       'User-Agent: axios/0.19.2\r\n' +
	//       'Content-Length: 84\r\n' +
	//       'Host: livepeer.com\r\n' +
	//       'Connection: close\r\n' +
	//       '\r\n',
	//     _keepAliveTimeout: 0,
	//     _onPendingData: [Function: noopPendingOutput],
	//     agent: Agent {
	//       _events: [Object: null prototype],
	//       _eventsCount: 2,
	//       _maxListeners: undefined,
	//       defaultPort: 443,
	//       protocol: 'https:',
	//       options: [Object],
	//       requests: {},
	//       sockets: [Object],
	//       freeSockets: {},
	//       keepAliveMsecs: 1000,
	//       keepAlive: false,
	//       maxSockets: Infinity,
	//       maxFreeSockets: 256,
	//       scheduling: 'fifo',
	//       maxTotalSockets: Infinity,
	//       totalSocketCount: 1,
	//       maxCachedSessions: 100,
	//       _sessionCache: [Object],
	//       [Symbol(kCapture)]: false
	//     },
	//     socketPath: undefined,
	//     method: 'POST',
	//     maxHeaderSize: undefined,
	//     insecureHTTPParser: undefined,
	//     path: '/api/asset/import',
	//     _ended: true,
	//     res: IncomingMessage {
	//       _readableState: [ReadableState],
	//       _events: [Object: null prototype],
	//       _eventsCount: 3,
	//       _maxListeners: undefined,
	//       socket: [TLSSocket],
	//       httpVersionMajor: 1,
	//       httpVersionMinor: 1,
	//       httpVersion: '1.1',
	//       complete: true,
	//       headers: [Object],
	//       rawHeaders: [Array],
	//       trailers: {},
	//       rawTrailers: [],
	//       aborted: false,
	//       upgrade: false,
	//       url: '',
	//       method: null,
	//       statusCode: 201,
	//       statusMessage: 'Created',
	//       client: [TLSSocket],
	//       _consuming: true,
	//       _dumped: false,
	//       req: [Circular *1],
	//       responseUrl: 'https://livepeer.com/api/asset/import',
	//       redirects: [],
	//       [Symbol(kCapture)]: false,
	//       [Symbol(RequestTimeout)]: undefined
	//     },
	//     aborted: false,
	//     timeoutCb: null,
	//     upgradeOrConnect: false,
	//     parser: null,
	//     maxHeadersCount: null,
	//     reusedSocket: false,
	//     host: 'livepeer.com',
	//     protocol: 'https:',
	//     _redirectable: Writable {
	//       _writableState: [WritableState],
	//       _events: [Object: null prototype],
	//       _eventsCount: 2,
	//       _maxListeners: undefined,
	//       _options: [Object],
	//       _redirectCount: 0,
	//       _redirects: [],
	//       _requestBodyLength: 84,
	//       _requestBodyBuffers: [],
	//       _onNativeResponse: [Function (anonymous)],
	//       _currentRequest: [Circular *1],
	//       _currentUrl: 'https://livepeer.com/api/asset/import',
	//       [Symbol(kCapture)]: false
	//     },
	//     [Symbol(kCapture)]: false,
	//     [Symbol(kNeedDrain)]: false,
	//     [Symbol(corked)]: 0,
	//     [Symbol(kOutHeaders)]: [Object: null prototype] {
	//       accept: [Array],
	//       'content-type': [Array],
	//       authorization: [Array],
	//       'user-agent': [Array],
	//       'content-length': [Array],
	//       host: [Array]
	//     }
	//   },
	//   data: {
	//     asset: {
	//       id: '017e375f-0408-4a39-a641-b90ad96c6c76',
	//       playbackId: '017e99q325o501hz',
	//       userId: 'e34fd332-5356-403e-a217-c4aa7750e436',
	//       createdAt: 1648196812767,
	//       status: 'waiting',
	//       name: 'Alvin5 example'
	//     },
	//     task: {
	//       id: 'b954d006-3e58-48fd-bee6-562145cf9760',
	//       createdAt: 1648196813364,
	//       type: 'import',
	//       outputAssetId: '017e375f-0408-4a39-a641-b90ad96c6c76',
	//       userId: 'e34fd332-5356-403e-a217-c4aa7750e436',
	//       params: [Object],
	//       status: [Object]
	//     }
	//   }

	// EXPORT TO IPFS
	// curl --location --request POST 'https://livepeer.com/api/asset/$ASSET_ID/export' \
	// --header 'Authorization: Bearer $API_TOKEN' \
	// --header 'Content-Type: application/json' \
	// --data-raw '{
	//     "ipfs": {}
	// }'

	axios
		.post(
			'https://livepeer.com/api/asset/017e375f-0408-4a39-a641-b90ad96c6c76/export',
			{},
			{
				headers: {
					Authorization: 'Bearer 8b2a2768-4ae5-40e5-bb2a-793ec562b475',
					'content-type': ' application/json',
				},
			}
		)
		.then(function (response) {
			console.log('axios ipfs  ok');
			console.log(response);
		})
		.catch(function (error) {
			console.log('axios ipfs error');
			console.log(error);
		});
})();
