package com.chicochico.domain.user.service;


import com.chicochico.domain.user.dto.LoginRequestDto;
import org.springframework.stereotype.Service;

import java.util.Map;


@Service
public class LoginService {

	/**
	 * 로그인을 수행합니다
	 *
	 * @param loginRequestDto 이메일과 비밀번호 (email, password)
	 */
	public void login(LoginRequestDto loginRequestDto) {
	}


	/**
	 * 깃허브로그인을 수행합니다
	 *
	 * @param loginRequestHeader 이메일과 비밀번호 (email, password)
	 */
	public void githubLogin(Map<String, Object> loginRequestHeader) {
	}


	/**
	 * 엑세스 토큰을 재발급합니다
	 *
	 * @param loginRequestHeader 엑세스 토큰
	 */
	public void createAccessToken(Map<String, Object> loginRequestHeader) {
	}


	/**
	 * 로그아웃합니다 (엑세스 토큰 삭제)
	 *
	 * @param logoutRequestHeader
	 */
	public void deleteAccessToken(Map<String, Object> logoutRequestHeader) {
	}

}
