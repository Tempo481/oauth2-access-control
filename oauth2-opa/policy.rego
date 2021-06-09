package example.authz

default allow = false

allow {
    input.method = "GET"
    input.path = ["sample"]
    input.subject.user = id
}

allow {
    is_admin
}

is_admin {
    input.roles = "ROLE_ADMIN"
}