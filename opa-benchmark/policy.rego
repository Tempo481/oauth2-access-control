package http.authz

default allow = false

allow {
    input.method == "GET"
    input.path == ["sample"]
    token.payload.roles[_] == "ROLE_USER"
}

allow {
    input.method == "GET"
    input.path == ["documents"]
    token.payload.roles[_] == "ROLE_USER"
}

allow {
    input.method == "GET"
    input.path == ["h2-console"]
}

user_has_role[role_name] {
    role_name == token.payload.roles[_] == "ROLE_USER"
}

# Helper to get the token payload.
token = {"payload": payload} {
    [header, payload, signature] := io.jwt.decode(input.token)  
}