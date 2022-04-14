package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Role;
import com.app.pojos.UserRoles;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

	Optional<Role> findByUserRole(UserRoles role);
}
