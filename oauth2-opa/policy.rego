package authz

default allow = true

allow {
  input.method == "GET"
  input.path = ["sample"]
}