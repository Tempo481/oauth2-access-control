package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Document;

@Repository
public interface DocumentRepository extends CrudRepository<Document, Long> {}
