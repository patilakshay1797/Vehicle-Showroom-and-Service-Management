package com.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.filters.JwtRequestFilter;

//@Configuration
@EnableWebSecurity // Tells SC that this class contains web security config.
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private JwtRequestFilter jwtFilter;

	// for configuring authentication , override below method
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println(1);
		// since there is no out-of-box imple for JPA based auth , u have to create a
		// custom class implementation of UserDetailsService n pass it here.
		// javadocs : Add authentication based upon the custom UserDetailsService that
		// is passed in.
		// It then returns a DaoAuthenticationConfigurer to allow customization of the
		// authentication.
		auth.userDetailsService(userDetailsService);
	}

	// for configuring authorization , override below method
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println(3);
		// specify our own config
		// enable cors n disable CSRF
		System.out.println("in configuration");
		http.cors().and().csrf().disable().

				authorizeRequests()// authorize all requests

				// .antMatchers("/**").permitAll()
				.antMatchers("/admin/**").hasRole("ADMIN").antMatchers("/employee/**").hasRole("EMPLOYEE")
				.antMatchers("/api/**").permitAll().// hasRole("USER").
				antMatchers("/customer/**").permitAll().// hasRole("USER").

				antMatchers("/", "/api/**").permitAll().

				antMatchers(HttpMethod.OPTIONS, "/**").permitAll()

				.and().

				sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

	}

	// From Spring sec 5 onwards MUST configure a password encoder bean , otherwise
	// : java.lang.IllegalArgumentException: There is no PasswordEncoder mapped
	@Bean // To configure a spring bean (return type of this method will be a spring bean
	// after configuring password encoder bean : u will have to supply encoded
	// password in auth config
	// o.w : Encoded password does not look like BCrypt : warning (& authentication
	// does not work
	// : equivalent to <bean id ...> tag in xml)
	public PasswordEncoder encoder() {
		System.out.println(2);
		return new BCryptPasswordEncoder();
	}
	// below code is required from Spring Boot 2.x onwards , earlier it used to
	// inject automatically AuthenticationManager created from
	// configure(AuthenticationManagerBuilder) method
	// Now MUST override this method to expose the AuthenticationManager from
	// configure(AuthenticationManagerBuilder) to be exposed as a Bean.

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {

		return super.authenticationManagerBean();
	}

}
