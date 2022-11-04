package com.entrega5.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.entrega5.model.entities"})
@EnableJpaRepositories(basePackages = {"com.entega5.repositories"})
@ComponentScan(basePackages = {"com.entrega5.controller", "com.entrega5.service.Impl"})
@SpringBootApplication
public class ProjetoEntrega5Application {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoEntrega5Application.class, args);
	}

}
