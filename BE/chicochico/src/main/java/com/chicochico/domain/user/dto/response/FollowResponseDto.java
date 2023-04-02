package com.chicochico.domain.user.dto.response;


import com.chicochico.domain.user.entity.UserEntity;
import com.chicochico.exception.CustomException;
import com.chicochico.exception.ErrorCode;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;


@Data
@Builder
public class FollowResponseDto {

	private String nickname;

	private String profileImagePath;

	private String introduction;

	private Boolean isFollowed;


	public static FollowResponseDto fromEntity(UserEntity user, Function<Long, Boolean> isFollowed) {
		return FollowResponseDto.builder()
			.nickname(user.getNickname())
			.profileImagePath(user.getProfileImagePath())
			.introduction(user.getIntroduction())
			.isFollowed(isFollowed.apply(user.getId()))
			.build();
	}


	public static List<FollowResponseDto> fromEnityList(List<UserEntity> userList, Function<Long, Boolean> isFollowed) {
		List<FollowResponseDto> result = new ArrayList<>();
		for (UserEntity user : userList) {
			FollowResponseDto xxResponseDto = FollowResponseDto.fromEntity(user, isFollowed);
			result.add(xxResponseDto);
		}
		return result;
	}


	public static Page<FollowResponseDto> fromEntityPage(List<UserEntity> list, Function<Long, Boolean> isFollowed, Pageable pageable) {
		int start = (int) pageable.getOffset();
		int end = Math.min(start + pageable.getPageSize(), list.size());
		List<FollowResponseDto> followResponseDtoList = fromEnityList(list, isFollowed);

		try {
			Page<FollowResponseDto> result = new PageImpl<>(followResponseDtoList.subList(start, end), pageable, followResponseDtoList.size());
			return result;
		} catch (IllegalArgumentException e) {
			throw new CustomException(ErrorCode.PAGE_NOT_FOUND);
		}

	}

}