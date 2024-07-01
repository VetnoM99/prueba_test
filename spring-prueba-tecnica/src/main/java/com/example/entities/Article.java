package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Articles")
public class Article {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "id")
long id;
@Column (name = "titular")
String titular;

@Column (name = "contenido")
String contenido;

}