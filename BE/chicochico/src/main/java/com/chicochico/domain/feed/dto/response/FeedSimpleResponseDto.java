package com.chicochico.domain.feed.dto.response;


import com.chicochico.common.code.FeedType;
import com.chicochico.domain.feed.entity.DiaryEntity;
import com.chicochico.domain.feed.entity.FeedEntity;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.ArrayList;
import java.util.List;


@Data
@Builder
public class FeedSimpleResponseDto {

	private Long feedId;

	private FeedType feedType;

	private String imagePath;

	private String content;


	public static FeedSimpleResponseDto fromEntity(FeedEntity xx) {
		FeedType feedType;
		if (xx instanceof DiaryEntity) {
			feedType = FeedType.FEED_DIARY;
		} else {
			feedType = FeedType.FEED_POST;
		}
		return FeedSimpleResponseDto.builder()
			.feedId(xx.getId())
			.feedType(feedType)
			.imagePath(xx.getImagePath())
			.content(xx.getContent())
			.build();
	}


	public static List<FeedSimpleResponseDto> fromEnityList(List<FeedEntity> xxList) {
		List<FeedSimpleResponseDto> result = new ArrayList<>();
		for (FeedEntity xx : xxList) {
			FeedSimpleResponseDto xxResponseDto = FeedSimpleResponseDto.fromEntity(xx);
			result.add(xxResponseDto);
		}
		return result;
	}


	public static Page<FeedSimpleResponseDto> fromEnityPage(Page<FeedEntity> page) {
		List<FeedEntity> feedList = new ArrayList<>(page.toList());
		List<FeedSimpleResponseDto> feedResponseDtoList = fromEnityList(feedList);
		Page<FeedSimpleResponseDto> result = new PageImpl<>(feedResponseDtoList, page.getPageable(), feedResponseDtoList.size());
		return result;
	}

}