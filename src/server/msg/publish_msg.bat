protoc ./ChessModel.proto ./ChessOuterMessage.proto ./lobby.proto --go_out=./
python copy_proto_to_client.py
cd ../../../
cd Clients/Chess/assets/resources/proto/
pbjs -t static-module -w commonjs -o protocol.js *.proto
pause