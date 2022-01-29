using System.Collections.Generic;
using System.Linq;
using NzbDrone.Core.Indexers;
using Prowlarr.Http.REST;

namespace Prowlarr.Api.V1.Indexers
{
    public class IndexerCapabilityResource : RestResource
    {
        public int? LimitsMax { get; set; }
        public int? LimitsDefault { get; set; }
        public List<IndexerCategory> Categories { get; set; }
        public bool SupportsRawSearch { get; set; }
        public List<SearchParam> Search { get; set; }
        public List<TvSearchParam> Tv { get; set; }
        public List<MovieSearchParam> Movie { get; set; }
        public List<MusicSearchParam> Music { get; set; }
        public List<BookSearchParam> Book { get; set; }
    }

    public static class IndexerCapabilitiesResourceMapper
    {
        public static IndexerCapabilityResource ToResource(this IndexerCapabilities model)
        {
            if (model == null)
            {
                return null;
            }

            return new IndexerCapabilityResource
            {
                LimitsMax = model.LimitsMax,
                LimitsDefault = model.LimitsDefault,
                Categories = model.Categories.GetTorznabCategoryTree(),
                SupportsRawSearch = model.SupportsRawSearch,
                Search = model.SearchParams,
                Tv = model.TvSearchParams,
                Movie = model.MovieSearchParams,
                Music = model.MusicSearchParams,
                Book = model.BookSearchParams
            };
        }

        public static List<IndexerCapabilityResource> ToResource(this IEnumerable<IndexerCapabilities> models)
        {
            return models.Select(ToResource).ToList();
        }
    }
}
