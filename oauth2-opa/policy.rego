package example.authz

default allow = true

allow {
    input.method = "GET"
    input.path = ["sample"]
}

allow {
    is_admin
}

is_admin {
    input.roles = "ROLE_USER"
}