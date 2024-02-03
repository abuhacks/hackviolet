import firebase_admin
from firebase_admin import credentials, auth
from flask import Flask, request, jsonify

cred = credentials.Certificate("secure/hack-violet-firebase-adminsdk.json")
firebase_admin.initialize_app(cred)



@app.route('/verifyToken', methods=['POST'])
def verify_token():
    data = request.get_json()
    id_token = data.get('idToken')

    try:
        # Check the token received from the client
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        # Token is valid, and you can use the UID to associate with user data in your database
        return jsonify({'uid': uid}), 200
    except auth.AuthError as e:
        # Handle error, token is invalid or expired
        return jsonify({'error': 'Invalid token'}), 401
