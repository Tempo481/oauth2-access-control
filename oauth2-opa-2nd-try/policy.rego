package http.authz

# import data.jwt
# import data.helper

default allow = false

# allow = true

# roles := realm_roles

# realm_roles[rr] {
#     rr := token.payload.realm_access.roles
# }

allow {
    input.method == "GET"
    input.path == ["sample"]
    token.payload.roles[_] == "ROLE_USER"
    # token.payload.preferred_username == "user"
    # token.payload.roles == ["ROLE_USER"]
#    jwt.roles["ROLE_USER"]
    # isUser
#    token.payload.roles == "ROLE_USER"
#    user_owns_token
}

# Ensure that the token was issued to the user supplying it.
user_owns_token { input.user == token.payload.azp }

# Helper to get the token payload.
token = {"payload": payload} {
    [header, payload, signature] := io.jwt.decode(input.auth.token.tokenValue)  
}

# output { io.jwt.verify_rs256(string, certificate) }

# isUser {
#     jwt.roles["ROLE_USER"]
# }