package http.authz

default allow = false

allow {
    input.method == "GET"
    input.path == ["sample"]
    token.payload.roles[_] == "ROLE_USER"
#    user_owns_token
}

allow {
    input.method == "GET"
    input.path == ["documents"]
    token.payload.roles[_] == "ROLE_USER"
#    user_owns_token
}

allow {
    input.method == "GET"
    input.path == ["h2-console"]
}

# Ensure that the token was issued to the user supplying it.
user_owns_token { input.user == token.payload.azp }

# Helper to get the token payload.
token = {"payload": payload} {
    [header, payload, signature] := io.jwt.decode(input.auth.token.tokenValue)  
}